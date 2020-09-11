import React, { useState } from 'react';
import Numbers from './Numbers';
import Turn from './Turn';
import Score from './Score';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';
import Grid from '@material-ui/core/Grid';

const random = [...Array(10)].map(() => Math.floor(Math.random() * 9)+1);
export default () => {
	const [selectedNum, setSelectedNum] = useState(null);
	const [player, selectPlayer] = useState(false);
	const [num, changeNum] = useState(random);

	return (
		<ThemeProvider theme={theme}>
			<Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
			<Numbers num={num} changeNum={changeNum} setSelectedNum={setSelectedNum} player={player} selectPlayer={selectPlayer}/>
			{num.length ? <Turn player={player}/> : <></>}
			<Score player={player} selectedNum={selectedNum} num={num}/>
			</Grid>
		</ThemeProvider>
	)
};