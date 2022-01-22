import React, { useEffect } from 'react';
import Button from '../../components/button';
import { getTaskHistory } from './taskHistorySlice';
import { useDispatch, useSelector } from 'react-redux';
import useTranslation from '../../../hooks/useTranslation';
import T from '../../../core/translations/translations.json';
import { taskHistorySelector } from '../../../stateManagement/selectors/task';
import './index.scss';
import Modal from '../../components/modal';
import TextInput from '../../components/input';

const TaskHistory = () => {
	const dispatch = useDispatch();
	const { data, count } = useSelector(taskHistorySelector);
	const translate = useTranslation();

	useEffect(() => {
		dispatch(getTaskHistory());
	}, []);

	return (
		<>
		<Modal title={T.ADD_DESCRIPTION}>
			<TextInput
				name="description"
				placeholder={T.DESCRIPTION}
			/>
		</Modal>
			<div className="task_history_container">
				<Button
					text={T.ADD_DESCRIPTION}
				/>

				<div className="table_list">
					<table border="1" width={400}>
						<thead>
						<tr>
							<td>{translate(T.DESCRIPTION)}</td>
							<td>{translate(T.ACTION)}</td>
						</tr>


						</thead>
					</table>
				</div>
			</div>
		</>
	);
};

export default TaskHistory;