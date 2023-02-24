import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "./Layouts/";
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
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<LoginPage />} />
                    <Route path="registrar" element={<RegisterPage />} />
                    <Route
                        path="olvidar-passowrd"
                        element={<OlvidarPassword />}
                    />
                    <Route
                        path="olvidar-passowrd/:token"
                        element={<OlvidarPassword />}
                    />
                    <Route path="new-password" element={<NuevaPassword />} />
                    <Route path="conformar/:id" element={<ConfirmarCuenta />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
