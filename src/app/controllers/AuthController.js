import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../../models/UserModel";

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    try {
      const [user] = await UserModel.findByEmail(email);

      if (!user || user.length === 0) {
        return res.status(401).json({ message: "Usuário não encontrado" });
      }

      const isPasswordValid = await bcrypt.compare(password, user[0].password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Senha incorreta" });
      }

      const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.json({ message: "Login realizado com sucesso", token });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Erro no servidor" });
    }
  }
}

export default new AuthController();
