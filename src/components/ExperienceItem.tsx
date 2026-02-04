

const ExperienceItem = ({company, date, title, location, technologies, description, image}: {company :string, date: string, title: string, location: string, technologies: string, description: string, image: string}) => {

    return (
        <>
            <div className="flex justify-between w-full h-50 rounded-2xl my-8">
                <div className="block w-25 grow-0 py-5">
                <img src={image} alt="" width={100} height={100}/>
                </div>
                <div className="rounded-4xl py-3 px-5 w-full mx-6 flex flex-col items-stretch"
                    >
                    <div className="flex w-full align-text-bottom">
                        <div className="flex w-[50%] gap-2.5">
                            <h3 className="font-bold text-xl">{company}</h3>
                            |
                            <p className="text-xl">{title}</p>
                        </div>

                        <div className="flex w-[60%] justify-end gap-2.5 py-1">
                            <h3>{location}</h3>
                            |
                            <h3>{date}</h3>
                        </div>
                    </div>
                    <div className="flex flex-col text-start w-full h-[70%]">
                        <p>{technologies}</p>
                        <p className="py-4">{description}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ExperienceItem;