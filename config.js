// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Stuart',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'afda2c70ad1f6e048c662457540140af', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '54.69925967743454',
	defaultLongitude: '-1.2215856562332743',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com/',
		},
		{
			id: '2',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'Plex',
			icon: 'film',
			link: 'https://app.plex.tv',
		},
		{
			id: '4',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com/feed/subscriptions',
		},
		{
			id: '5',
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://instagram.com',
		},
		{
			id: '6',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://twitch.tv/directory/following/live',
		}
	],

	secondButtonsContainer: [
		
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'server',
			id: '1',
			links: [
				{
					name: 'Dashboard',
					link: 'http://stuartsnas/Dashboard',
				},
				{
					name: 'Sonarr',
					link: 'http://192.168.148.4:8989/',
				},
				{
					name: 'Radarr',
					link: 'http://192.168.148.4:7878/',
				},
				{
					name: 'Deluge',
					link: 'http://192.168.148.4:8112/',
				},
				{
					name: 'Overseerr',
					link: 'http://192.168.148.4:5055/',
				}
			]
		}
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: '',
			id: '1',
			links: [
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				}
			]
		}
	]
};
