package rc.bootsecurity.model.enums;

public enum REPORT_TYPE {
    NEW_REPORT("Nový report"),
    EXISTING_REPORT("Existujúci report");

    private final String text;


    REPORT_TYPE(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
