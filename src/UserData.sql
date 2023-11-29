PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE User_Data {First_Name: String,
Last_Name: String,
Email: String,
Favorites: String[],
Current_Drugs: String[],
Past_Drugs: String[]}
COMMIT;
