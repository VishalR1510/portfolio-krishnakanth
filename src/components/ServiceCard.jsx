import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import VideocamIcon from '@mui/icons-material/Videocam';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

function ServiceCard({ Icon, title, content}) {
  return (
    <div className="rounded-lg bg-transparent cardReveal">
        <div className="relative mb-6">
          <div className="w-full aspect-square bg-white/10 rounded-lg"></div>
          <div className="absolute top-0 left-6 w-16 h-16 bg-purple-800 rounded-md flex items-center justify-center -translate-y-1/2">
            <Icon 
              sx={{
                width : 32,
                height : 32,
                color: '#000'
              }}
            />
          </div>
        </div>
        <h2 className="custom-target hover:text-purple-800 text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        <p className="text-gray-400 leading-relaxed">{content}</p>
    </div>
  );
}

export default ServiceCard;