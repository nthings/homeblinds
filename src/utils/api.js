export async function fetchHomeProducts() {
    // const res = await fetch('https://api.example.com/products');
    // return res.json();

    return [
        {
            "id": 1,
            "title": "Enrollables",
            "price": "Desde $150 m2",
            "image": "/images/enrollable.jpg",
            "roomSuitability": ["bedroom", "living room", "office"],
            "material": "fabric",
            "lightControl": "light filtering",
            "privacyLevel": "medium",
            "installationType": ["inside mount", "outside mount"],
            "colorOptions": ["white", "beige", "gray"],
            "priceRange": 150
        },
        {
            "id": 2,
            "title": "Sheer Elegance",
            "price": "Desde $150 m2",
            "image": "/images/sheer_elegance.jpg",
            "roomSuitability": ["living room", "office"],
            "material": "fabric",
            "lightControl": "sheer",
            "privacyLevel": "low",
            "installationType": ["inside mount", "outside mount"],
            "colorOptions": ["white", "beige"],
            "priceRange": 250
        },
        {
            "id": 3,
            "title": "Panel Japonés",
            "price": "Desde $550 m2",
            "image": "/images/panel_japones.jpg",
            "roomSuitability": ["living room", "office", "bedroom"],
            "material": "fabric",
            "lightControl": "light filtering",
            "privacyLevel": "medium",
            "installationType": ["outside mount"],
            "colorOptions": ["white", "gray", "black"],
            "priceRange": 550
        },
        // {
        //     "id": 4,
        //     "title": "Horizontales de Madera",
        //     "price": "Desde $300 m2",
        //     "image": "/images/wooden-blinds.jpg",
        //     "roomSuitability": ["living room", "office"],
        //     "material": "wood",
        //     "lightControl": "light filtering",
        //     "privacyLevel": "high",
        //     "installationType": ["inside mount", "outside mount"],
        //     "colorOptions": ["brown", "dark brown"],
        //     "priceRange": 300
        // },
        // {
        //     "id": 5,
        //     "title": "Romanas",
        //     "price": "Desde $250 m2",
        //     "image": "/images/roman-shades.jpg",
        //     "roomSuitability": ["bedroom", "living room"],
        //     "material": "fabric",
        //     "lightControl": "blackout",
        //     "privacyLevel": "high",
        //     "installationType": ["inside mount", "outside mount"],
        //     "colorOptions": ["white", "beige", "gray"],
        //     "priceRange": 250
        // },
        // {
        //     "id": 6,
        //     "title": "Toldos",
        //     "price": "Desde $1050 m2",
        //     "image": "/images/awning.jpg",
        //     "roomSuitability": ["outdoor"],
        //     "material": "fabric",
        //     "lightControl": "light filtering",
        //     "privacyLevel": "medium",
        //     "installationType": ["outside mount"],
        //     "colorOptions": ["white", "gray", "blue"],
        //     "priceRange": 1050
        // }
    ];
}

export async function fetchServices() {
    // const res = await fetch('https://api.example.com/services');
    // return res.json();

    return [
        {
            title: "REPARAMOS TUS PERSIANAS",
            subtitle: "Reparación de persianas y cortinas de cualquier marca y modelo.",
            icon: "fa-screwdriver",
        },
        {
            title: "AUTOMATIZACIÓN",
            subtitle: "Automatiza tus persianas y cortinas, Integración con Alexa y Google Home",
            icon: "fa-robot",
        },
        {
            title: "INSTALACIÓN PROFESIONAL",
            subtitle: "Instaladores profesionales con años de experiencia",
            icon: "fa-ruler-combined",
        },
    ];
}

export async function fetchTestimonials() {
    // const res = await fetch('https://api.example.com/testimonials');
    // return res.json();

    return [
        {
            quote: "Los planes de financiamiento en HOMEBLINDS me permitieron renovar toda mi casa sin preocupaciones. ¡Tienen un servicio al cliente que no encuentras en otro lugar!",
            author: "Alberto Mendez Raya",
            image: "/images/testimonial1.jpg",
        },
        {
            quote: "Opté por la automatización de mis cortinas con HOMEBLINDS y fue la mejor decisión. Es increíble como puedo controlar todo con solo un clic. Lo mejor para mí, es que la instalación fue rápida y sin problemas.",
            author: "Ana Roberta Ruiz",
            image: "/images/testimonial2.jpg",
        },
        {
            quote: "Lo que me hizo escoger HOMEBLINDS fue su garantía de por vida, sin embargo, tras 4 años de uso, sus persianas han resistido el paso del tiempo y siguen como nuevas. ¡Realmente estoy satisfecho!",
            author: "Jorge Abdiel Torres",
            image: "/images/testimonial3.jpg",
        },
        {
            quote: "HOMEBLINDS transformó mi oficina. La obtención de las persianas fue directa y sin presiones, y la variedad de estilos encajó perfectamente con las necesidades y exigencias que teniamos. ¡Un cambio total!",
            author: "Miguel Ángel Jiménez",
            image: "/images/testimonial3.jpg",
        },
        {
            quote: "Después de cotizar en varios lugares, HOMEBLINDS me atrapó por su servicio tan personalizado. Me ayudaron a seleccionar las mejores persianas para mi clima y decoración, honestamente quedé encantada con ellos.",
            author: "Sofía Guerrero",
            image: "/images/testimonial3.jpg",
        },
        {
            quote: "En mi vida había tenido un servicio de reparación tan eficiente, detectaron el problema de mis persianas y en menos de 24 horas estaban funcionando perfectamente. Puedo decir que HOMEBLINDS nos brindó un servicio de primera.",
            author: "Iñaki Loera",
            image: "/images/testimonial3.jpg",
        },
    ];
}

export async function fetchProductById(id) {
    // const res = await fetch(`https://api.example.com/products/${id}`);
    // return res.json();

    return {
        title: "Enrollables",
        price: 150,
        images: ["/images/roller-shades.jpg", "/images/wooden-blinds.jpg"],
        description:
            "Las persianas enrollables son una excelente opción para controlar la entrada de luz en tu hogar. Son fáciles de limpiar y muy duraderas.",
    };
}

export async function fetchBackgroundImages() {
    return [
        "/images/banner.jpg",
        "/images/roller-shades.jpg",
    ];
}