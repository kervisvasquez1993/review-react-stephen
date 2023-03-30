import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, ProyectoProvider } from "./context/";
import { AuthLayout, RutaProtegida } from "./Layouts/";
import { NuevoProyecto, Proyectos, EditProject, ShowProject } from "./Pages/dashboard/";


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
                <ProyectoProvider>
                    <Routes>
                        <Route path="/" element={<AuthLayout />}>
                            <Route index element={<LoginPage />} />
                            <Route
                                path="registrar"
                                element={<RegisterPage />}
                            />
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
                            <Route
                                path="crear-proyecto"
                                element={<NuevoProyecto />}
                            />
                            <Route
                                path=":id"
                                element={<ShowProject />}
                            />
                            <Route
                                path="edit/:id"
                                element={<EditProject/>}
                            />
                        </Route>
                    </Routes>
                </ProyectoProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
