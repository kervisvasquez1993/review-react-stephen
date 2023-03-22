import nodemailer from "nodemailer";

export const emailRegister = async (datos) => {
    console.log(
        "desde nodemailer",
        process.env.HOST_MAIL,
        process.env.PORT_MAIL,
        process.env.AUTH_USER_MAIL,
        process.env.AUTH_PASS_MAIL
    );
    const { email, token, nombre } = datos;
    const transport = nodemailer.createTransport({
        host: process.env.HOST_MAIL,
        port: process.env.PORT_MAIL,
        auth: {
            user: process.env.AUTH_USER_MAIL,
            pass: process.env.AUTH_PASS_MAIL,
        },
    });

    //infor

    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "Uptask - Comprueba tu cuneta",
        html: `
            <p>Hola : ${nombre} Comprueba tu cuenta en Uptask</p>
            <p>Tu cuenta esta casi lista solo debes comprobar tu cuenta</p>
            <a href="${process.env.FRONT_URL}/confirmar/${token}">Comprueba Cuenta</a> 
            <p>Si no creaste esta cuenta, puedes ignorar el mensaje</p>
        `,
    });

    
};

export const resetPassword = async (datos) => {
    const { email, token, nombre } = datos;
    const transport = nodemailer.createTransport({
        host: process.env.HOST_MAIL,
        port: process.env.PORT_MAIL,
        auth: {
            user: process.env.AUTH_USER_MAIL,
            pass: process.env.AUTH_PASS_MAIL,
        },
    });

    //infor

     await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "Uptask - Reestablece tu password",
        html: `
            <p>Hola : ${nombre} </p>
            <p>Con el siguiente enlace puedes reestablecer tu contraseña</p>
            <p>Sigue el siguiente enlace para generar tu password</p>
            <a href="${process.env.FRONT_URL}/olvidar-password/${token}">Comprueba Cuenta</a> 
            <p>Si no solicitaste este email, puedes ignorar el mensaje</p>
        `,
    });

    
};
