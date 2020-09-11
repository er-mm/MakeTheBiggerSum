import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default props => {
	return <Grid item>
		<Typography variant="h4">{`Player ${props.player ? 2 : 1}'s Turn`}</Typography>
	</Grid>;
};