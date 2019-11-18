package rc.bootsecurity.model.enums;

public enum REQUEST_TYPE {
    TICKET("Ticket"),
    REPORT("Report"),
    FINANCE("Finance");

    private final String text;


    REQUEST_TYPE(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
