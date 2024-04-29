
export const videoArray = [
  "JavaScript",
  "IPL",
  "Manchester United",
  "Premier Leauge",
  "Redux",
  "Data Structure and Algorithm",
];

export const Youtube_Api = 'https://www.googleapis.com/youtube/v3/videos?part=id,snippet,contentDetails,statistics&q=&chart=mostPopular&country=US&maxResults=50&key='

export const Searchbar_api = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${import.meta.env.VITE_REACT_APP_API_KEY}&q=hellosurfing`;

export const Youtube_Search_Suggestion = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

export const commentsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Wow nice video✌️",
    replies: [
      {
        id: 2,
        name: "Alice Smith",
        text: "Yes actuall the video is good ",
        replies: [
          {
            id: 3,
            name: "Bob Johnson",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nunc eget lorem efficitur cursus. Donec sed nulla eu nunc tristique aliquam. Duis vitae odio nec enim consequat hendrerit. Vestibulum commodo purus ut nisi commodo, in tempor lorem varius. Proin scelerisque, nisl ac dapibus eleifend, orci velit congue mi, ut laoreet velit ex quis lorem. Mauris bibendum pretium nunc, ut condimentum felis. Morbi rhoncus tortor in massa dictum, a placerat ipsum egestas. Curabitur vitae justo quis mauris dignissim finibus. Fusce ac magna enim.",
            replies: []
          },
          {
            id: 6,
            name: "Eva Martinez",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt aliquam justo, ut mattis justo efficitur et. Sed eget ultricies nunc. Curabitur tincidunt eros in erat tincidunt, vitae ultrices velit aliquam. Ut aliquam, enim eget gravida aliquet, lacus sapien dignissim purus, eget aliquam quam tortor nec velit. Fusce id nisl vel sapien ullamcorper gravida. Integer convallis nisi sit amet condimentum lacinia. Integer nec sem at lectus dapibus iaculis. Maecenas in libero non ante scelerisque tincidunt. Donec viverra ex nec enim gravida, vitae consequat ligula posuere.",
            replies: []
          },
          {
            id: 7,
            name: "Michael Brown",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida eros id odio vestibulum, at egestas lorem feugiat. In sit amet fringilla est. Phasellus semper velit nec justo pharetra, vel laoreet leo vehicula. Aliquam rhoncus, odio sed vehicula lacinia, turpis enim dapibus lorem, ut malesuada ante justo vel neque. Integer congue vestibulum eleifend. Fusce dignissim sapien non ante hendrerit, nec consectetur felis mollis. Curabitur vel odio et mauris tristique commodo. Suspendisse potenti. Pellentesque ac hendrerit turpis. Mauris quis volutpat risus.",
            replies: []
          }
        ]
      },
      {
        id: 4,
        name: "Sarah Wilson",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies dolor id posuere convallis. Quisque auctor, sem eget tincidunt dignissim, magna risus interdum dui, vel varius velit nunc nec dolor. Nulla in lectus eu dolor euismod tempus. Proin sed tortor ac lacus posuere fringilla. Curabitur ut purus sed lorem aliquam viverra non ut erat. Sed varius est justo, ut congue libero pellentesque nec. Sed eget mauris eleifend, posuere arcu eget, convallis nulla. Donec mattis lectus nisl, ac consectetur justo iaculis et. Proin consequat lobortis justo non fermentum. Integer scelerisque enim ac augue convallis, vel consequat tortor consequat. Duis vel malesuada neque.",
        replies: []
      }
    ]
  },
  {
    id: 5,
    name: "Emily Jones",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend tortor vel enim eleifend, eget tempor enim pharetra. Suspendisse posuere elit ac malesuada auctor. Fusce nec odio eu sem vehicula pharetra at in nisi. Donec vehicula orci non felis rhoncus dictum. Nam vehicula commodo libero, vitae aliquam arcu tristique ac. Quisque pharetra est vitae neque convallis, ac ultrices felis posuere. Cras eget est eget velit suscipit egestas nec a sem. Integer pharetra lorem nec arcu maximus, ut fringilla nunc scelerisque. Mauris luctus, sem ac varius rutrum, enim quam viverra nulla, at efficitur eros ante ut mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer consequat felis id lacinia volutpat. Vestibulum sit amet elit id est maximus feugiat id vel ipsum.",
    replies: [
      {
        id: 8,
        name: "Daniel White",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum gravida nisi eget ullamcorper. Nulla faucibus, sapien id aliquam egestas, erat erat scelerisque mauris, et ullamcorper lacus lacus eget mauris. Proin tempor eleifend nulla, quis elementum libero vulputate et. Nullam id lorem id risus efficitur facilisis. Aliquam rhoncus auctor dapibus. Phasellus non libero eget nulla viverra elementum. Vivamus blandit malesuada mi nec tempus. Cras quis enim quam. Nullam facilisis faucibus tellus non ultricies. Maecenas non dui eget libero convallis sollicitudin sit amet quis mi. Curabitur sit amet leo magna. Nulla sollicitudin libero in nisi egestas, nec dictum mauris bibendum. Donec vestibulum nulla et libero eleifend, quis cursus mi vehicula.",
        replies: []
      },
      {
        id: 9,
        name: "Olivia Taylor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci velit. Ut tincidunt lectus a sapien ultricies, nec fringilla lacus aliquam. Fusce non est eu mi aliquam eleifend. Nam vel nisl faucibus, commodo nunc ac, tincidunt justo. Proin molestie ut ligula nec condimentum. Sed vel velit in mauris rutrum tempus. Nam eget dictum nulla. Fusce mattis consectetur libero non tempus. Suspendisse potenti. Donec gravida purus at odio convallis, quis tempor justo pulvinar. Duis tempor diam purus, ac malesuada leo hendrerit at. Proin vulputate velit quis purus iaculis, id aliquam ante tincidunt. Sed non vestibulum ligula, nec commodo elit.",
        replies: []
      }
    ]
  },
  {
    id: 10,
    name: "David Clark",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non tellus vitae purus faucibus interdum et at risus. Maecenas bibendum, quam ut varius eleifend, nunc lacus vestibulum odio, a ultricies magna nisi id arcu. Aliquam erat volutpat. Nullam ut libero fermentum, sollicitudin quam sed, interdum metus. Aliquam sagittis rhoncus quam in placerat. Nullam nec ultricies orci. Aenean fermentum nunc eget ligula fermentum dignissim. Sed feugiat, velit in faucibus aliquam, mauris velit suscipit lectus, et condimentum nulla ante sit amet lacus. Sed tristique, felis in ullamcorper pharetra, sapien tortor fringilla magna, id sollicitudin purus augue eu urna. Integer interdum id arcu eu tincidunt. Suspendisse congue laoreet nulla et convallis. Aliquam hendrerit ligula eu nunc luctus faucibus. Curabitur lacinia felis eget magna fermentum aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sit amet accumsan nunc. Sed sodales tortor quis nisi maximus efficitur.",
    replies: []
  },
  // Add more comments here...
];

export const live_Data = [

]