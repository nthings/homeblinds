export async function fetchProducts() {
    // const res = await fetch('https://api.example.com/products');
    // return res.json();

    return [
        {
            id: 1,
            title: "Enrollables",
            price: "Desde $150 m2",
            image: "/images/roller-shades.jpg",
        },
        {
            id: 2,
            title: "Sheer Elegance",
            price: "Desde $150 m2",
            image: "/images/sheer-blinds.jpg",
        },
        {
            id: 3,
            title: "Panel Japonés",
            price: "Desde $550 m2",
            image: "/images/panel.jpg",
        },
        {
            id: 4,
            title: "Horizontales de Madera",
            price: "Desde $300 m2",
            image: "/images/wooden-blinds.jpg",
        },
        {
            id: 5,
            title: "Romanas",
            price: "Desde $250 m2",
            image: "/images/roman-shades.jpg",
        },
        {
            id: 6,
            title: "Toldos",
            price: "Desde $1050 m2",
            image: "/images/awning.jpg",
        },
    ];
}

export async function fetchServices() {
    // const res = await fetch('https://api.example.com/services');
    // return res.json();

    return [
        {
            title: "Reparación",
            subtitle: "Reparamos cualquier tipo de persiana o cortina",
            icon: "fa-screwdriver-wrench",
        },
        {
            title: "Automatización",
            subtitle: "Automatiza tus persianas y cortinas, Integración con Alexa y Google Home",
            icon: "fa-award",
        },
        {
            title: "Venta e Instalación",
            subtitle:
                "Venta e instalación de persianas, cortinas y toldos a la medida de tus necesidades",
            icon: "fa-credit-card",
        },
    ];
}

export async function fetchWhy() {
    return [
        {
            title: "Instalación Profesional",
            subtitle: "Instaladores profesionales con años de experiencia",
            icon: "fa-screwdriver-wrench",
        },
        {
            title: "Garantia De Por Vida",
            subtitle: "Cobertura completa para tu tranquilidad",
            icon: "fa-award",
        },
        {
            title: "Financiamiento",
            subtitle:
                "Aceptamos cualquier metodo de pago y mensualidades sin intereses",
            icon: "fa-credit-card",
        },
    ];
}

export async function fetchTestimonials() {
    // const res = await fetch('https://api.example.com/testimonials');
    // return res.json();

    return [
        {
            quote: "Excelente servicio, excelentes precios!",
            author: "Juan",
            image: "/images/testimonial1.jpg",
        },
        {
            quote: "Me encantan mis nuevas cortinas!",
            author: "Emilia",
            image: "/images/testimonial2.jpg",
        },
        {
            quote: "El mejor lugar para comprar persianas.",
            author: "David",
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
        images: ["/images/roller-shades.jpg"],
        description:
            "Las persianas enrollables son una excelente opción para controlar la entrada de luz en tu hogar. Son fáciles de limpiar y muy duraderas.",
    };
}