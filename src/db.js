import { connect } from "mongoose";

export const dbConection = async () => {
  const db = await connect(
    "mongodb+srv://santiDB:Santi1234@calendardb.1dm6cqr.mongodb.net/chatBox"
  );
  console.log(`Conectado a la Base de Dato ${db.connection.name}`);
};


