import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import VideocamIcon from '@mui/icons-material/Videocam';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

function ServiceCard({ Icon, title, content}) {
  return (
    <div className="relative p-6 rounded-lg">
        <div className="absolute top-0 left-20 w-[65px] h-[65px] bg-purple-800">
          <Icon 
            className="absolute left-2 top-2"
            sx={{
              width : 50,
              height : 50
            }}
          />
        </div>
        <div className="w-[300px] h-[300px] bg-white/10 mb-4 mx-auto"></div>
        <h2 className="custom-target hover:text-purple-800 text-3xl ml-6 font-bold">{title}</h2>
        <p className="text-gray-400 ml-6 mt-2">{content}</p>
    </div>
  );
}

export default ServiceCard;