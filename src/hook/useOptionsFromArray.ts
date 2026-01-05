import { useMemo } from "react";
import {RadioOption} from "@/components/ui/fields/Radio/RadioField.types";

export const useOptionsFromArray = (
    items: Array<string | number>
): RadioOption[] => {
    return useMemo(
        () =>
            items.map((item) => ({
                label: String(item),
                value: String(item),
            })),
        [items]
    );
};
