import React, { useEffect, useState } from 'react';
import PostList from './postList';
import Modal from '../../components/modal';
import Button from '../../components/button';
import AddEditPostModal from './addEditPostModal';
import { deletePost, getPosts } from './postsSlice';
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

	const isOpenDeleteModal = ({ id = '' }) => {
		setDeleteModalState(prev => (
			{
				id,
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

	const openDeleteModal = (id) => {
		isOpenDeleteModal({ id });
	};

	const closeDeleteModal = () => {
		isOpenDeleteModal({});
	};

	const handleDeletePost = () => {
		dispatch(deletePost(deleteModalState.id));
		closeDeleteModal();
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
						title={T.DELETE_POST}
						onOk={handleDeletePost}
						onClose={closeDeleteModal}
						visible={deleteModalState.visible}
					>
						<p>{translate(T.DELETE_POST_MESSAGE)}? ({deleteModalState.id})</p>
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
						onOpenDeleteModal={openDeleteModal}
					/>
				</div>
			</div>
		</>
	);
};

export default Posts;