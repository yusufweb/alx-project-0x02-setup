import {CardProps} from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 m-4 shadow-md bg-white max-w-sm">
      <h3 className="mt-0 mb-2 text-lg font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default Card;