//el layout viene siendo el root que engloba todas las paginas y rutas desde el front
import { TaskProvider } from "../context/TaskContext"; //aca importamos desde el context el TaskProvider para que actue en todos los componentes
import "./globals.css";
import { Navbar } from "./component/Navbar";

//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] }); // *esto permite sacar los estilos de fuente  desde google

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//puedo agregar una NavBar para que actue en toda la app, se renderiza en todas las paginas
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <Navbar />
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}
