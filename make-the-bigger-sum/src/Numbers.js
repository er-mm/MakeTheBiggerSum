import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	paper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		width: 50,
	},
	colorPaper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		width: 50,
		backgroundColor: 'yellow'
	},
}));

export default props => {
	const classes = useStyles();
	const { num, setSelectedNum, selectPlayer, player, changeNum } = props;

	const clickNumber = (key, e) => {
		e.preventDefault();
		console.log('key==>', key);
		console.log('num==>', num);
		if (key === 0 || key === num.length - 1) {
			selectPlayer(!player);
			if (key === 0) {
				setSelectedNum(num.shift());
				changeNum(num);
			} else {
				setSelectedNum(num.pop())
				changeNum(num);
			}
		}
	}

	return (
		<Grid item>
			<Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
				{
					num.map((number, index) => (
						<Grid key={index} item onClick={(e) => clickNumber(index, e)}>
							<Paper className={index === 0 || index === num.length - 1 ? classes.colorPaper : classes.paper} elevation={3}>
								<Typography variant="h4">{number}</Typography>
							</Paper>
						</Grid>
					))
				}
			</Grid>
		</Grid>
	);
};