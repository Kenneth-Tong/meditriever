import sqlite3
con = sqlite3.connect("UserData.db")

cur = con.cursor()

PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;

/* UserData: Name, Username, Date, Search*/
CREATE TABLE database_name.table_name(
   EMAIL TEXT PRIMARY KEY   NOT NULL,
   NAME TEXT   NOT NULL
   DATE INT    NOT NULL
   CURRENT_MED TEXT
   HISTORY TEXT /* Would be a stringified list */
   
);

CREATE TABLE history(
   ID INT PRIMARY KEY   NOT NULL,

);

/*
CREATE TABLE User_Data {First_Name: String,
Last_Name: String,
Email: String,
Favorites: String[],
Current_Drugs: String[],
Past_Drugs: String[]}

COMMIT;
*/