import * as fs from 'fs';
import * as readlineSync from 'readline-sync';

// Define types for our JSON data
interface Stadium {
    id: number;
    name: string;
    capacity: number;
    location: string;
}

interface Team {
    id: number;
    name: string;
    description: string;
    founded: number;
    active: boolean;
    stadium: string;
    profile_image: string;
    league_position: number;
    colors: string[];
    stadium_info: Stadium;
}

// Load JSON data from file
const loadData = (filePath: string): any[] => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

// Display stadium information
const displayStadium = (stadium: Stadium): void => {
    console.log(`- ${stadium.name} (ID: ${stadium.id})`);
    console.log(`  - Capacity: ${stadium.capacity}`);
    console.log(`  - Location: ${stadium.location}`);
};

// Display team information
const displayTeam = (team: Team): void => {
    console.log(`- ${team.name} (ID: ${team.id})`);
    console.log(`  - Description: ${team.description}`);
    console.log(`  - Founded: ${team.founded}`);
    console.log(`  - Active: ${team.active}`);
    console.log(`  - League Position: ${team.league_position}`);
    console.log(`  - Colors: ${team.colors.join(', ')}`);
    console.log(`  - Stadium: ${team.stadium_info.name} (Capacity: ${team.stadium_info.capacity}, Location: ${team.stadium_info.location})`);
    console.log(`  - Profile Image: ${team.profile_image}`);
};

// Filter by team ID
// const filterTeamByID = (teams: Team[], id: number): Team | null => {
//     return teams.find(team => team.id === id) || null;
// };

// Filter by stadium ID
// const filterStadiumByID = (stadiums: Stadium[], id: number): Stadium | null => {
//     return stadiums.find(stadium => stadium.id === id) || null;
// };

// Main function to drive the app
const main = () => {
    const teams = loadData('./json-files/teams.json');
    const stadiums = loadData('./json-files/stadiums.json');

    while (true) {
        console.log('Welcome to the JSON data viewer!');
        console.log('1. View all teams');
        console.log('2. View all stadiums');
        // console.log('3. Filter teams by ID');
        // console.log('4. Filter stadiums by ID');
        console.log('3. Exit');

        const choice = readlineSync.question('Please enter your choice: ');

        if (choice === '1') {
            console.log('All teams:');
            teams.forEach(displayTeam);
        } else if (choice === '2') {
            console.log('All stadiums:');
            stadiums.forEach(displayStadium);
            // } else if (choice === '3') {
            //     const id = readlineSync.questionInt('Please enter the team ID you want to filter by: ');
            //     const team = filterTeamByID(teams, id);

            //     if (team) {
            //         console.log(`Team found:`);
            //         displayTeam(team);
            //     } else {
            //         console.log('No team found with that ID.');
            //     }
            // } else if (choice === '4') {
            //     const id = readlineSync.questionInt('Please enter the stadium ID you want to filter by: ');
            //     const stadium = filterStadiumByID(stadiums, id);

            //     if (stadium) {
            //         console.log(`Stadium found:`);
            //         displayStadium(stadium);
            //     } else {
            //         console.log('No stadium found with that ID.');
            //     }
        } else if (choice === '3') {
            console.log('Exiting...');
            break;
        } else {
            console.log('Invalid choice. Please select again.');
        }
    }
};

main();
