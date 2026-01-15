function WorkCard(props) {
    return (
        <div className="checkpoint">
            <div className="custom-target checkpoint-item bg-zinc-900 fadeUp">
                <span className="text-base uppercase font-bold text-yellow-400" style={{color:""}}>{props.work}</span>

                <h3 className="mt-2 mb-1 text-white text-xl font-bold" style={{color:""}}>{props.role}</h3>
                <p className="org text-md" style={{color:""}}>{props.company}</p>
                <p className="time text-[13px] mt-3 text-purple-500" style={{color:""}}>{props.timespan}</p>

                <ul className="list-disc mt-[14px] pl-[18px]">
                    <li className="mb-[6px]">{props.content1}</li>
                    <li className="mb-[6px]">{props.content2}</li>
                    <li className="mb-[6px]">{props.content3}</li>
                </ul>
            </div>
        </div>
    );
}

export default WorkCard;