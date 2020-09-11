import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
	const [state, setState] = React.useState({
		columns: [
			{ title: '#', field: 'sno', type: 'numeric' },
			{ title: 'Name', field: 'name' },
			{ title: 'Email', field: 'email' },
		],
		data: [
			{ sno: 1, name: 'Mayank', email: 'Mm@gmail' },
			{
				sno: 2,
				name: 'Manas',
				email: 'manas@gmail',
			},
		],
	});

	return (
		<MaterialTable
			title="Table"
			columns={state.columns}
			data={state.data}
			options={{
				search: false,
				actionsColumnIndex: -1
			  }}
			editable={{
				onRowAdd: (newData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve();
							setState((prevState) => {
								const data = [...prevState.data];
								data.push(newData);
								return { ...prevState, data };
							});
						}, 600);
					}),
				onRowUpdate: (newData, oldData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve();
							if (oldData) {
								setState((prevState) => {
									const data = [...prevState.data];
									data[data.indexOf(oldData)] = newData;
									return { ...prevState, data };
								});
							}
						}, 600);
					}),
				onRowDelete: (oldData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve();
							setState((prevState) => {
								const data = [...prevState.data];
								data.splice(data.indexOf(oldData), 1);
								return { ...prevState, data };
							});
						}, 600);
					}),
			}}
		/>
	);
}