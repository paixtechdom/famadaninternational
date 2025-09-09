// import cloudSecurity from "./images/cloudSecurity.jpg"
import logoImg from "./images/logo.png"
import palmkernelshell from "./images/images.jpeg"
import riceshaft from "./images/images (2).jpeg"
import sawdust from "./images/images (5).jpeg"

export const logo = logoImg

export const NavInfo = [
    {
        title: 'Home',
        link: '',
    },
    {
        title: 'About Us',
        link: 'about-us',
    },
    
    {
        title: 'Products',
        link: 'products'
    },
   
    {
        title: 'Our Team',
        link: 'our-team',        
    },
    
]

export const products = [
    {
        title: "Palm Kernel Shells (PKS)",
        desc: ["A byproduct of palm oil processing, used as renewable fuel, for activated carbon production, and as an eco-friendly industrial material.",
            "Palm Kernel Shells are the hard shells left after palm oil production. At Famadan, we ensure high-quality PKS through careful sourcing, cleaning, and supervised loading."
        ],
        applications: [
            "Renewable fuel (co-firing with coal or standalone biomass fuel).",
            "Production of activated carbon for industrial use.",
            "Eco-friendly construction material."
        ],
        whys: [
            "Washed and prepared under trained supervision.",
            "Available in large volumes with storage facilities in Cross River State.",
            "Consistent supply, capable of handling 30–50 trucks weekly."
        ],
        img: palmkernelshell
    },
    {
        title: "Rice Chaff",
        desc: ["A major byproduct of rice milling, useful in construction, agriculture, and as a sustainable fuel source.",
            "Rice chaff is the outer husk removed during the milling process. While often discarded, it is a versatile resource in multiple industries."
        ],
        applications: [
            "Used in construction as filler material.",
            "Agricultural applications (soil improvement, composting).",
            "Sustainable energy production."
        ],
        whys: [
            "Sourced directly from trusted rice milling facilities.",
            "Available in bulk quantities for industrial use.",
            "Sustainably sourced to reduce agricultural waste."
        ],
        img: riceshaft
    },
    {
        title: "Sawdust",
        desc: ["Wood industry residue, suitable for energy production, composting, and various environmental applications.",
            "Sawdust is a natural by-product of the wood industry. Instead of being wasted, we supply it for productive uses that benefit both the environment and industry."
        ],
        applications: [
            "Biomass fuel for energy production.",
            "Soil conditioner and composting material",
            "Raw material for particle boards and other industrial uses."
        ],
        whys: [
            "Procured from reputable sawmills and furniture factories.",
            "Available in clean, ready-to-use form.",
            "Delivered with flexible logistics to meet client needs."
        ],
        img: sawdust
    },
]

// ********************** STYLING ***********************************
export const ButtonClass = "rounded-full px-6 py-3 min-w-[200px] font-bold uppercase"




