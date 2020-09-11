import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default props => {
	const { player, selectedNum, num } = props;
	const [sum1, setSum1] = useState(0);
	const [sum2, setSum2] = useState(0);
	let greater = false;
	useEffect(() => {
		if (player) setSum1(sum1 + selectedNum);
		else setSum2(sum2 + selectedNum);
		greater = sum1 > sum2;
	}, [player, selectedNum, setSum1, setSum2]);

	return (
		<>
			<Grid item>
				<Grid container spacing={4}>
					<Grid item>
						<Typography variant="h4">Players</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h4">Player 1</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h4">Player 2</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Grid container item spacing={7}>
					<Grid item>
						<Typography variant="h4">Total Score</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h4">{sum1}</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h4">{sum2}</Typography>
					</Grid>
				</Grid>
			</Grid>
			{!num.length ? <Grid item>
			<Typography variant={'h2'}>{`${greater ? 'Player 1' : 'Player 2'} Wins`}</Typography>
			</Grid> : <></>}
		</>
	);
};