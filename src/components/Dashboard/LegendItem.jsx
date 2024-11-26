function LegendItem({ image, name }) {

    return (
        <> 
        <div className="py-1">
            <div className="flex justify-start items-center gap-3">
                <img src={`./markers/${image}`} alt="" className="w-auto size-9" />
                <div className="text-sm leading-4">{name}</div>
            </div>
        </div>
        </>
    )
}

export default LegendItem