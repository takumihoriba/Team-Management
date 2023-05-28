ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Current-Root-Password';
FLUSH PRIVILEGES;

CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD on *.* TO 'jtstripes95'@'localhost' WITH GRANT OPTION;
SELECT user,authentication_string,plugin,host FROM mysql.user;
