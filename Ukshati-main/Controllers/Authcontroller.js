import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { hashPassword } from "../Helpers/Hashpw.js";
import mySqlPool from "../config/Database.js";




// Login 
export const LoginController =  async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email using a MySQL query
      const [rows] = await mySqlPool.query('SELECT * FROM login WHERE email = ?', [email]);
  
      if (!rows.length) {
        // User not found
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const user = rows[0];

      const isHashed = user.password && user.password.length > 30;

      if (!isHashed) {
        const providedHashedPassword = await hashPassword(password);
        await mySqlPool.query('UPDATE login SET password = ? WHERE email = ?', [providedHashedPassword, email]);  
            
      }
  
      // Compare password using bcrypt's hashCompare
      const isPasswordValid = bcrypt.compare(password, user.password);



      if (!isPasswordValid) {
        return res.status(401).json({ message:'Invalid  password' });
      }


        // Login successful, generate a JWT token
        const payload = { userId: user.id }; // Customize payload data as needed
        const secret = process.env.JWT_SECRET; // Ensure a secret key is defined in your environment
        const token =  JWT.sign(payload, secret, { expiresIn: '1h' }); 

  
        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
    };

//       // Login successful
//       res.json({ message: 'Login successful' });
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ message: 'Internal server error'});
//     }
//   };

