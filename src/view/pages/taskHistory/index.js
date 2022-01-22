import React, { useEffect, useState } from 'react';
import Button from '../../components/button';
import { addPost, getTaskHistory } from './taskHistorySlice';
import { useDispatch, useSelector } from 'react-redux';
import useTranslation from '../../../hooks/useTranslation';
import T from '../../../core/translations/translations.json';
import { taskHistorySelector } from '../../../stateManagement/selectors/task';
import Modal from '../../components/modal';
import TextInput from '../../components/input';
import { useForm } from '../../../hooks/useForm';
import './index.scss';


const TaskHistory = () => {
	const dispatch = useDispatch();
	const translate = useTranslation();
	const { data: postData, count } = useSelector(taskHistorySelector);
	const { values, handleChange } = useForm({
		initialState: {
			description: '',
			title: 'Post title'
		}
	});

	const [ modalIsOpen, setModalIsOpen ] = useState(false);

	const handleIsOpenModal = () => setModalIsOpen(!modalIsOpen);

	const dateConverter = (date) => {
		return new Date(date).toLocaleDateString()
	};
	const onCloseModal = () => {
		handleIsOpenModal();
	};

	const handleAddPost = () => {
		dispatch(addPost(values));
	};

	useEffect(() => {
		dispatch(getTaskHistory());
	}, []);

	return (
		<>
			{
				modalIsOpen && (
					<Modal
						onOk={handleAddPost}
						onClose={onCloseModal}
						title={T.ADD_DESCRIPTION}
						okButtonDisable={!values.description}
					>
						<TextInput
							name="description"
							label={T.DESCRIPTION}
							onChange={handleChange}
							value={values.description}
							placeholder={T.DESCRIPTION}
						/>
					</Modal>
				)
			}


			<div className="task_history_container">
				<Button
					onClick={handleIsOpenModal}
					text={T.ADD_DESCRIPTION}
				/>

				<div className="post_lists">
					{
						postData.map((item, index) => {
							return (
								<div className="post_item">
									<div className="header">
										<div className="date_count_content">
											<span className="count_content">
												{index + 1}
											</span>
											<span className="date_count">
												{dateConverter(item.createdAt)}
											</span>
										</div>


										<div className="action_content">
											<span>delete</span>
											<span>edit</span>
										</div>
									</div>


									<div className="body">
										{item.description}
									</div>
								</div>
							);
						})
					}

				</div>
			</div>
		</>
	);
};

export default TaskHistory;