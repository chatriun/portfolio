import classes from './Modal.module.css';

// TODO: createPortal doesn't work
const Modal = ({ children, onClose }) => {
	return (
		<div>
			<div className={classes.backdrop} onClick={onClose} />
			<dialog className={classes.modal} open>
				{children}
			</dialog>
		</div>
	);
};

export default Modal;
