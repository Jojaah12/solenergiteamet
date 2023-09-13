import Icon from "@mdi/react";
import { mdiCheckCircle } from "@mdi/js";

type CardSelectElement = {
  label: string;
  description: string;
  value: string | number;
};

type CardSelectProps = {
  elements: any[];
  selected: string | number;
  handleSelect: (element: CardSelectElement) => void;
};

export const CardSelect = ({
  elements,
  handleSelect,
  selected,
}: CardSelectProps) => {
  return (
    <div className="mt-4">
      <div className="space-y-6">
        {elements.map((element, i) => (
          <div key={i}>
            <div
              className={`w-full cursor-pointer hover:border-primary rounded p-[14px] border ${
                selected === element.value
                  ? "border-primary"
                  : "border-neutral-300"
              } transition flex justify-between `}
              onClick={() => handleSelect(element)}
            >
              <div className="">
                <span className="font-semibold text-darkPurple">
                  {element.label}
                </span>
                <p className="text-neutral-500">
                  {element.description}
                </p>
              </div>
              <span>
                <Icon
                  path={mdiCheckCircle}
                  size={1}
                  className={`${
                    selected === element.value
                      ? "text-primary"
                      : "hidden"
                  }`}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
