export interface ILeg {
	id: string;
	departure_airport: string;
	arrival_airport: string;
	departure_time: string;
	arrival_time: string;
	stops: number;
	airline_name: string;
	airline_id: string;
	duration_mins: number;
}
