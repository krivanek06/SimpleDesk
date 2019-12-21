package rc.bootsecurity.model.enums;

public enum REPORT_REFRESH {
    ONCE("jendorázové"),
    EACH_DAY("denne"),
    EACH_WEEK("týždenne"),
    EACH_MONTH("mesačne");

    private final String text;


    REPORT_REFRESH(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
