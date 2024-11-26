import { LocalFireDepartmentOutlined, FloodOutlined, CarCrashOutlined, BrokenImageOutlined, QuestionMark } from '@mui/icons-material';

export const INCIDENT_STYLES = {
    FIRE: {
      Icon: LocalFireDepartmentOutlined,
      bgColor: 'bg-red-600',
    },
    FLOOD: {
      Icon: FloodOutlined,
      bgColor: 'bg-blue-600',
    },
    EARTHQUAKE: {
      Icon: BrokenImageOutlined,
      bgColor: 'bg-purple-600',
    },
    ACCIDENT: {
      Icon: CarCrashOutlined,
      bgColor: 'bg-yellow-600',
    },
    OTHER: {
      Icon: QuestionMark,
      bgColor: 'bg-gray-500',
    },
  };