// const express = require("express");
// const mssql = require('mssql/msnodesqlv8');

// const app = express();
// app.use(express.json());

// const config = {
//     server: "DESKTOP-JMUG5FJ\\SQLEXPRESS",
//     database: "Exam",
//     user: 'Usama',
//     password: "123456",
//     options: {
//         trustedConnection: true,
//     },
//     driver: "msnodesqlv8",
// };

// // Connect to SQL Server
// mssql.connect(config, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Connected to SQL Server");
//     }
// });

// app.post('/login', (req, res) => {
//     const sql = "SELECT * FROM  users WHERE `email`=? AND `password`=?";
//     const values = [req.body.email, req.body.password];
//     db.query(sql, values, (err, data) => {
//         if (err) {
//             return res.json("Error");
//         }
//         if (data.length > 0) {
//             return res.json("Success");
//         } else {
//             return res.json("Fail");
//         }
//     });
// });

// app.post('/signup', (req, res) => {
//     const sql = "INSERT INTO  users(`name`, `email`, `password`) VALUES (?, ?, ?)";
//     const values = [req.body.name, req.body.email, req.body.password];
//     db.query(sql, values, (err, data) => {
//         if (err) {
//             return res.json("Error");
//         }
//         return res.json("Success");
//     });
// });















































































































// // server.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const sql = require('mssql');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());

// // Database Configuration
// const config = {
//   user: 'Usama',
//   password: '123456',
//   server: 'DESKTOP-JMUG5FJ\\SQLEXPRESS',
//   database: 'Exam',
// };

// // Connect to MSSQL Server
// sql.connect(config)
//   .then(() => console.log('Connected to MSSQL Server'))
//   .catch(err => console.error('Error connecting to MSSQL Server:', err));

// // Register route
// app.post('/signup', async (req, res) => {
//   const { id, name, email, password } = req.body;

//   try {
//     const request = new sql.Request();
//     const query = `INSERT INTO users (id, name, email, password) VALUES('${id}', '${name}', '${email}', '${password}')`;
//     await request.query(query);
//     res.send('User registered successfully');
//   } catch (err) {
//     console.error('Error registering user:', err);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Get top 1000 users route
// app.get('/users', async (req, res) => {
//   try {
//     const request = new sql.Request();
//     const result = await request.query('SELECT [id], [name], [email], [password] FROM [Exam].[dbo].[users]');
//     res.json(result.recordset);
//   } catch (err) {
//     console.error('Error fetching users:', err);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });











































// const express = require("express");
// const mssql = require('mssql');

// const app = express();
// app.use(express.json());

// const config = {
//     user: 'Usama',
//     password: '123456',
//     server: 'DESKTOP-JMUG5FJ\\SQLEXPRESS',
//     database: 'Exam',
//     options: {
//         trustedConnection: true,
//     },
//     driver: 'msnodesqlv8', // Ensure you have installed 'msnodesqlv8' driver using npm
// };

// // Connect to SQL Server
// mssql.connect(config)
//     .then(() => console.log('Connected to SQL Server'))
//     .catch(err => console.error('Error connecting to SQL Server:', err));

// // Handle login request
// app.post('/login', async (req, res) => {
//     try {
//         const pool = await mssql.connect(config);
//         const { email, password } = req.body;
//         const result = await pool.request()
//             .input('email', mssql.VarChar, email)
//             .input('password', mssql.VarChar, password)
//             .query('SELECT * FROM users WHERE email = @email AND password = @password');

//         if (result.recordset.length > 0) {
//             res.json("Success");
//         } else {
//             res.json("Fail");
//         }
//     } catch (err) {
//         console.error('Error during login:', err);
//         res.json("Error");
//     }
// });

// // Handle signup request
// app.post('/signup', async (req, res) => {
//     try {
//         const pool = await mssql.connect(config);
//         const { name, email, password } = req.body;
//         const result = await pool.request()
//             .input('id', mssql.int,id)
//             .input('name', mssql.VarChar, name)
//             .input('email', mssql.VarChar, email)
//             .input('password', mssql.VarChar, password)
//             .query('INSERT INTO users (id, name, email, password) VALUES (@id,@name, @email, @password)');
        
//         res.json("Success");
//     } catch (err) {
//         console.error('Error during signup:', err);
//         res.json("Error");
//     }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });












const express = require('express');
const sql = require('mssql');
const app = express();

app.use(express.json());

const config = {
  user: 'Usama',
  password: '123456',
  server: ' DESKTOP-JMUG5FJ\\SQLEXPRESS', 
  database: 'Exam',
};

app.post('/signup', async (req, res) => {
  try {
    await sql.connect(config);
    const { username, email, password } = req.body;
    const result = await sql.query`INSERT INTO users (id, name, email, password) VALUES (${id},${username}, ${email}, ${password})`;
    res.json({ message: 'Registration successful' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
