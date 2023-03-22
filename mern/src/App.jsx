import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { AuthLayout, RutaProtegida } from "./Layouts/";
import Proyectos from "./Pages/dashboard/Proyectos";
import {
    ConfirmarCuenta,
    LoginPage,
    NuevaPassword,
    OlvidarPassword,
    RegisterPage,
} from "./Pages/index";
const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<AuthLayout />}>
                        <Route index element={<LoginPage />} />
                        <Route path="registrar" element={<RegisterPage />} />
                        <Route
                            path="olvidar-password"
                            element={<OlvidarPassword />}
                        />
                        <Route
                            path="olvidar-password/:token"
                            element={<NuevaPassword />}
                        />
                        {/* <Route path="new-password" element={<NuevaPassword />} /> */}
                        <Route
                            path="confirmar/:id"
                            element={<ConfirmarCuenta />}
                        />
                    </Route>
                    <Route path="/proyectos" element={<RutaProtegida />}>
                        <Route index element={<Proyectos />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
