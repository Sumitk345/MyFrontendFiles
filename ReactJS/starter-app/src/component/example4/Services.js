import ServiceCard from "./ServiceCard";


let data = [
    {
        "id": 1,
        "image": "https://placehold.co/200x200/grey/white?text=service-1",
        "title": "24/7 Doctors Support",
        "description": "A team of experienced doctors is available immediately for your health needs.",
        "icon": "icon1"
    },
    {
        "id": 2,
        "image": "https://placehold.co/200x200/grey/white?text=service-2",
        "title": "Online Consultations",
        "description": "Consult with specialists from the comfort of your home through our secure platform.",
        "icon": "icon2"
    },
    {
        "id": 3,
        "image": "https://placehold.co/200x200/grey/white?text=service-3",
        "title": "Emergency Services",
        "description": "Quick response for urgent medical situations with a dedicated emergency team.",
        "icon": "icon3"
    },
    {
        "id": 4,
        "image": "https://placehold.co/200x200/grey/white?text=service-4",
        "title": "Mental Health Support",
        "description": "Access to counseling and therapy sessions with certified mental health professionals.",
        "icon": "icon4"
    },
    {
        "id": 5,
        "image": "https://placehold.co/200x200/grey/white?text=service-5",
        "title": "Routine Check-ups",
        "description": "Schedule regular health check-ups to monitor and maintain your well-being.",
        "icon": "icon5"
    },
    {
        "id": 6,
        "image": "https://placehold.co/200x200/grey/white?text=service-6",
        "title": "Prescription Management",
        "description": "Manage and refill your prescriptions easily through our online portal.",
        "icon": "icon6"
    },
    {
        "id": 7,
        "image": "https://placehold.co/200x200/grey/white?text=service-7",
        "title": "Health Monitoring",
        "description": "Use our tools to track vital signs and health metrics over time.",
        "icon": "icon7"
    },
    {
        "id": 8,
        "image": "https://placehold.co/200x200/grey/white?text=service-8",
        "title": "Nutrition Advice",
        "description": "Get personalized nutrition plans and dietary advice from our experts.",
        "icon": "icon8"
    },
    {
        "id": 9,
        "image": "https://placehold.co/200x200/grey/white?text=service-9",
        "title": "Physical Therapy",
        "description": "Access rehabilitation services and physical therapy to support recovery and wellness.",
        "icon": "icon9"
    },
    {
        "id": 10,
        "image": "https://placehold.co/500x500/grey/white?text=service-10",
        "title": "Specialist Referrals",
        "description": "Receive referrals to top specialists for advanced treatment and care.",
        "icon": "icon10"
    }
]

let Services = () => {
    return (
        <div>
            <div className="d-inline-flex overflow-x-scroll" style={{width:"100%"}} >
                {data.map(item =>
                   <ServiceCard data={item}/>
                )}
            </div>
        </div>
    )
}

export default Services;