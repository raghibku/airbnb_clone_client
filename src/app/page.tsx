import FirstFilter from "@/components/shared/FirstFilter";
import Properties from "@/components/shared/Properties";
import ResponsiveDiv from "@/components/shared/ResponsiveDiv";
import TagFilter from "@/components/shared/TagFilter";
import { BookingProvider } from "@/context/BookingContext";
import { PropertyProvider } from "@/context/PropertyContext";


export default function Home({ Component, pageProps }: any) {
  return (
    <BookingProvider>
      <PropertyProvider>
        <ResponsiveDiv>
          <div className="w-full h-full" {...pageProps}>
            <FirstFilter />
            <TagFilter />
            <Properties />
          </div>
        </ResponsiveDiv>
      </PropertyProvider>
    </BookingProvider>

  );
}
