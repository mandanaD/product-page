import {useMemo} from "react";
import {RadioOption} from "@/components/ui/fields/Radio/RadioField.types";

export const useColorOptions = (
    colors: {
        id: string;
        name: string;
        hex: string;
    }[]
): RadioOption[] => {
    return useMemo(
        () =>
            colors.map((c) => ({
                label: c.name,
                value: c.id,
                colorHex: c.hex,
            })),
        [colors]
    );
};
