import React, { useEffect, useState } from 'react';
import PostList from './postList';
import { getPosts } from './postsSlice';
import Modal from '../../components/modal';
import Button from '../../components/button';
import AddEditPostModal from './addEditPostModal';
import { useDispatch, useSelector } from 'react-redux';
import useTranslation from '../../../hooks/useTranslation';
import T from '../../../core/translations/translations.json';
import { postsSelector } from '../../../stateManagement/selectors/posts';
import './index.scss';

const Posts = () => {
	const dispatch = useDispatch();
	const translate = useTranslation();
	const { data: postData, count } = useSelector(postsSelector);

	const [ deleteModalState, setDeleteModalState ] = useState({
		id: '',
		visible: false
	});
	const [ editAddModalState, setEditAddModalState ] = useState({
		state: null,
		visible: false,
		type: ''
	});

	useEffect(() => {
		dispatch(getPosts());
	}, []);


	const isOpenAddEditModal = ({ type = '', state = null }) => {
		setEditAddModalState(prev => (
			{
				type,
				state,
				visible: !prev.visible
			}
		));
	};

	const openAddModal = () => {
		isOpenAddEditModal({ type: 'ADD' });
	};

	const openEditModal = (state) => {
		isOpenAddEditModal({ type: 'EDIT', state });
	};


	return (
		<>

			{
				editAddModalState.visible && (
					<AddEditPostModal
						editAddModalState={editAddModalState}
						isOpenAddEditModal={isOpenAddEditModal}
						setEditAddModalState={setEditAddModalState}
					/>
				)
			}

			{
				deleteModalState.visible && (
					<Modal
						visible={deleteModalState.visible}
					>

					</Modal>
				)
			}

			<div className="task_history_container">
				<div className="">
					<Button
						onClick={openAddModal}
						text={T.ADD_DESCRIPTION}
					/>

					<span>{translate(T.POST)} ({count})</span>
				</div>

				<div className="post_container">
					<PostList
						data={postData}
						onOpenEditModal={openEditModal}
					/>
				</div>
			</div>
		</>
	);
};

export default Posts;