import {useState} from "react";

const ModalDialog = (props) => {
    const title = props.title;
    const message = props.message;
    const showConfirm = props.showConfirm;
    const [visible, setVisible] = useState(props.visible);

    const dismiss = () => {
        setVisible("notvisible");
    };

    return (
        // <div className={`modal ${visible === "visible" ? "show d-block" : ""}`} id="modalDialog">
        <div className="modal show d-block" id="modalDialog">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{title}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        {message}
                    </div>
                    <div className="modal-footer">
                        {
                            showConfirm ?
                                <>
                                    <button type="button" className="btn btn-success" data-bs-dismiss="modal">Yes
                                    </button>
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">No</button>
                                </>
                                :
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                        onClick={dismiss}>OK</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ModalDialog;

