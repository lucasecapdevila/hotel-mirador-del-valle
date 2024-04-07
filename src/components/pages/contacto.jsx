import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Container, Tab, Table, Tabs ,} from "react-bootstrap"





return (
    <main>
     <div>   
        <Container>
        <div class="box-info">
            <h1>CONTÁCTATE CON NOSOTROS</h1>
            <class="data">

                <p><i class="fa-solid fa-phone"></i> +54 3815457232</p>
                <p><i class="fa-solid fa-envelope"></i> hotelmiradordelvalle@gmail.com</p>
                <p><i class="fa-solid fa-location-dot"></i> av independencia 245 Tafi del Valle</p>
            
                <script src="https://kit.fontawesome.com/b408879b64.js" crossorigin="anonymous"></script>
        
            
        </div>
        <form>
            <div class="input-box">
                <input type="text" placeholder="Nombre y apellido" required>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="input-box">
                <input type="email" required placeholder="Correo electrónico">
                <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="input-box">
                <input type="text" placeholder="Asunto">
                <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <div class="input-box">
                <textarea placeholder="Escribe tu mensaje..."></textarea>
            </div>
            <button type="submit">Enviar mensaje</button>
        </form>
    </div>


        </Container>
    </main>
)