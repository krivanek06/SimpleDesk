package rc.bootsecurity.model.enums;

public enum MODULE_TYPE {
    TICKET("Ticket"),
    REPORT("Report"),
    FINANCE("Finance");

    private final String text;


    MODULE_TYPE(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
