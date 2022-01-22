import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../../stateManagement/selectors/auth';
import './index.scss';
import Loading from '../../../components/loading';
import { postsPendingSelector } from '../../../../stateManagement/selectors/posts';

const PostList = ({ data, onOpenEditModal, onOpenDeleteModal }) => {
	const user = useSelector(userSelector);
	const pending = useSelector(postsPendingSelector);

	const dateConverter = (date) => {
		return new Date(date).toLocaleDateString();
	};

	if(pending) {
		return <Loading/>;
	}
	return (
		<div className="post_lists">
			{
				data.map((item, index) => {
					return (
						<div className="post_item" key={item._id}>
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
									<span
										className="edit"
										// onClick={() => onOpenEditModal({ id: item._id, description: item.description })}
									>
										<i className="fa fa-edit"/>
									</span>
									{user._id === item.owner && (
										<span
											className="delete"
											onClick={() => onOpenDeleteModal(item._id)}
										>
											<i className="fa fa-trash-o"/>
										</span>
									)}
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
	);
};

export default PostList;