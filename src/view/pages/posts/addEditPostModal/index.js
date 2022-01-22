import React, { useEffect } from 'react';
import { addPost } from '../postsSlice';
import { useDispatch } from 'react-redux';
import Modal from '../../../components/modal';
import TextInput from '../../../components/input';
import { useForm } from '../../../../hooks/useForm';
import T from '../../../../core/translations/translations.json';

const modalTypeData = {
	ADD: {
		title: T.ADD_POST
	},
	EDIT: {
		title: T.EDIT_POST
	}
};

const AddEditPostModal = ({
							  isOpenAddEditModal,
							  editAddModalState: { visible, state, type }
						  }) => {

	const dispatch = useDispatch();
	const { values, setValues, handleChange } = useForm({
		initialState: {
			description: ''
		}
	});

	useEffect(() => {
		if(state) {
			setValues(state);
		}
	}, [ state ]);

	const onCloseModal = () => {
		isOpenAddEditModal({});
		setValues({
			description: ''
		});
	};

	const handleAddPost = () => {
		dispatch(addPost(values));
		onCloseModal();
	};

	return (
		<Modal
			visible={visible}
			onOk={handleAddPost}
			onClose={onCloseModal}
			okButtonDisable={!values.description}
			title={modalTypeData[type].title}
		>
			<TextInput
				name="description"
				label={T.DESCRIPTION}
				onChange={handleChange}
				value={values.description}
				placeholder={T.DESCRIPTION}
			/>
		</Modal>
	);
};

export default AddEditPostModal;