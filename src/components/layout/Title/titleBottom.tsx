import ListToolbar from "./listToolbar";

const TitleBottom = ({ info }: { info: string }) => {
    return (
        <div className="title_bottom">
            <div>
                <div className="title_bottom_info">{info}</div>
                <div>
                    <ListToolbar
                        search={{
                            value: "",
                            onChange: () => console.log(test),
                            placeholder: "",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TitleBottom;
