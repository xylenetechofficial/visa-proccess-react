import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { InterviewSectorInterface } from '../../../masters/interviewSector/type';
import { Heading2, Heading3, Heading4, Heading5, Heading6 } from '../../../../componenets/CoustomHeader';

function not(a: InterviewSectorInterface[], b: InterviewSectorInterface[]) {
    return a.filter((ele) => !(b.some(obj => obj.id == ele.id)))
}

function intersection(a: readonly number[], b: InterviewSectorInterface[]) {
    const arr = [];
    for (let i = 0; i < b.length; i++) {
        if (a.includes(b[i].id ?? 0)) {
            arr.push(b[i]);
        }
    }
    return arr;
}

function SelectSectorSection(
    props: {
        selectedMasterSector: InterviewSectorInterface[],
        changeSelectedMasterSector: (ele: InterviewSectorInterface[]) => void,
        selectedDifferedSector: InterviewSectorInterface[],
        changeSelectedDifferedSector: (ele: InterviewSectorInterface[]) => void,
        interviewSector: InterviewSectorInterface[],
        changeInterviewSector: (ele: InterviewSectorInterface[]) => void,

    }
) {
    const [checked, setChecked] = React.useState<number[]>([]);
    // const [left, setLeft] = React.useState<readonly number[]>([0, 1, 2, 3]);
    // const [right, setRight] = React.useState<readonly number[]>([4, 5, 6, 7]);

    const leftChecked = intersection(checked, props.selectedDifferedSector);
    const middleChecked = intersection(checked, props.interviewSector);
    const rightChecked = intersection(checked, props.selectedMasterSector)

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    const handle_left_to_middle = () => {
        props.changeInterviewSector([...props.interviewSector, ...leftChecked])
        props.changeSelectedDifferedSector(not(props.selectedDifferedSector, leftChecked))
        setChecked([])
    }
    const handle_middle_to_left = () => {
        props.changeSelectedDifferedSector([...props.selectedDifferedSector, ...middleChecked])
        props.changeInterviewSector(not(props.interviewSector, middleChecked))
        setChecked([])
    }
    const handle_right_to_middle = () => {
        props.changeInterviewSector([...props.interviewSector, ...rightChecked])
        props.changeSelectedMasterSector(not(props.selectedMasterSector, rightChecked))
        setChecked([])
    }
    const handle_middle_to_right = () => {
        props.changeSelectedMasterSector([...props.selectedMasterSector, ...middleChecked])
        props.changeInterviewSector(not(props.interviewSector, middleChecked))
        setChecked([])
    }







    const customList = (items: InterviewSectorInterface[], name: string) => (
        <>
            <Heading6 text={name} align='center'/>
            <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
                <List dense component="div" role="list">
                    {items.map((ele, index) => {
                        const labelId = `transfer-list-item-${index}-label`;

                        return (
                            <>

                                <ListItem
                                    key={index}
                                    role="listitem"
                                    button
                                    onClick={handleToggle(ele.id ?? 0)}
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            checked={checked.indexOf(ele.id ?? 0) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{
                                                'aria-labelledby': labelId,
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={ele.name} />
                                </ListItem>
                            </>
                        );
                    })}
                </List>
            </Paper>
        </>
    );

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>{customList(props.selectedDifferedSector, "Differed Sector")}</Grid>
            <Grid item>
                <Grid container direction="column" alignItems="center">

                    <Button
                        sx={{ my: 0.5 }}
                        variant="contained"
                        size="small"
                        onClick={handle_left_to_middle}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected middle"
                    >
                        &gt;
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="contained"
                        size="small"
                        onClick={handle_middle_to_left}
                        disabled={middleChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>

                </Grid>
            </Grid>
            <Grid item>{customList(props.interviewSector, "Interview Sector")}</Grid>
            <Grid item>
                <Grid container direction="column" alignItems="center">

                    <Button
                        sx={{ my: 0.5 }}
                        variant="contained"
                        size="small"
                        onClick={handle_middle_to_right}
                        disabled={middleChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="contained"
                        size="small"
                        onClick={handle_right_to_middle}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>

                </Grid>
            </Grid>
            <Grid item>{customList(props.selectedMasterSector, "Master Sector")}</Grid>
        </Grid>
    )
}

export default SelectSectorSection