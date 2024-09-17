
let data = [
    {
        "id": 1,
        "image": "https://i.pravatar.cc/300",
        "comment": "The doctors were incredibly attentive and made sure I felt comfortable throughout my visit. Highly recommend!",
        "rating": 5
    },
    {
        "id": 2,
        "image": "https://i.pravatar.cc/300",
        "comment": "I had a positive experience with the medical staff. They were professional and made me feel at ease.",
        "rating": 4
    },
    {
        "id": 3,
        "image": "https://i.pravatar.cc/300",
        "comment": "The hospitality from the doctors was excellent. They took their time to explain everything and answer my questions.",
        "rating": 5
    },
    {
        "id": 4,
        "image": "https://i.pravatar.cc/300",
        "comment": "While the medical care was good, the waiting time was a bit long. The staff were friendly though.",
        "rating": 3
    },
    {
        "id": 5,
        "image": "https://i.pravatar.cc/300",
        "comment": "I was impressed by how caring the doctors were. They made sure I was well taken care of and followed up on my condition.",
        "rating": 4
    },
    {
        "id": 6,
        "image": "https://i.pravatar.cc/300",
        "comment": "The doctors were knowledgeable and supportive, but I found the check-in process to be a bit disorganized.",
        "rating": 3
    },
    {
        "id": 7,
        "image": "https://i.pravatar.cc/300",
        "comment": "Exceptional service from the medical team. They were warm, compassionate, and attentive to my needs.",
        "rating": 5
    },
    {
        "id": 8,
        "image": "https://i.pravatar.cc/300",
        "comment": "Good overall experience. The doctors were friendly, but there could be improvements in communication during busy hours.",
        "rating": 4
    },
    {
        "id": 9,
        "image": "https://i.pravatar.cc/300",
        "comment": "The staff were polite and professional, though the appointment was delayed. Overall, a satisfactory experience.",
        "rating": 3
    },
    {
        "id": 10,
        "image": "https://i.pravatar.cc/300",
        "comment": "The doctors provided excellent care and went out of their way to ensure I was comfortable. Truly appreciated their effort.",
        "rating": 5
    }
];
let Reviews = () => {
    return (
        <div>
            <div className="d-inline-flex overflow-x-scroll" style={{ width: "100%" }} >
                {data.map(item =>
                    <div className="card m-3 shadow" style={{minWidth:"400px",minHeight:"400px"}}>
                        <div className="d-flex justify-content-center">
                            <img src={item.image} className="mt-3" style={{width:"80px", borderRadius:"50px"}} />
                        </div>

                        <p className="mt-3 text-center">{item.comment}</p>

                        <div className="mt-3 justify-content-center d-flex">
                            {Array(item.rating).fill().map(item=>
                                <i class="fa-solid fa-star text-warning fw-bold"></i>
                            )}
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}

export default Reviews;