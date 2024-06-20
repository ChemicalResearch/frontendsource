import { useQuery } from "@tanstack/react-query";
import { FC, Fragment } from "react";
import { getLabactivityJrfs } from "../../services/lab-activity-jrfs";
import { DownloadLinkButton } from "../../components/buttons";

interface JrfNoListProps {
  jrfNumber: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const JrfNoList: FC<JrfNoListProps> = ({ jrfNumber, onChange }) => {
  const { data } = useQuery({
    queryKey: ["laboratory-activity"],
    queryFn: async () => {
      const { data } = await getLabactivityJrfs();
      return data;
    },
  });

  return (
    <Fragment>
      <div className="font-semibold text-left mb-2">JRF No. ALIVE</div>
      <ul>
        {data?.map((x, key) => (
          <li key={key}>
            <div className="flex flex-row items-center gap-1">
              <label className="flex items-center font-medium text-gray-800 cursor-pointer">
                <input
                  type="checkbox"
                  value={x.jrfNumber}
                  checked={jrfNumber === x.jrfNumber}
                  onChange={onChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-2 cursor-pointer"
                />
                {x.jrfNumber}
              </label>
              <DownloadLinkButton
                href={x.jrfDocumentUrl}
                className="w-8 h-8 bg-transparent text-blue-600 hover:bg-transparent shadow-none"
              />
            </div>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default JrfNoList;
